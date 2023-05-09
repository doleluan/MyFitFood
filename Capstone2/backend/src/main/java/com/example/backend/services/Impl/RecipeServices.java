package com.example.backend.services.Impl;

import com.example.backend.dto.RecipeDTO;
import com.example.backend.dto.RecipeIDetailDTO;
import com.example.backend.model.food.FoodDetail;
import com.example.backend.model.recipe.Recipe;
import com.example.backend.model.recipe.RecipeDetail;
import com.example.backend.model.recipe.RecipeDetailId;
import com.example.backend.repository.IRecipeRepository;
import com.example.backend.services.IFoodDetailServices;
import com.example.backend.services.IRecipeDetailServices;
import com.example.backend.services.IRecipeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RecipeServices implements IRecipeServices {
    @Autowired
    private IRecipeRepository iRecipeRepository;
    @Autowired
    private IFoodDetailServices iFoodDetailServices;
    @Autowired
    private IRecipeDetailServices iRecipeDetailServices;
    @PersistenceContext
    private EntityManager entityManager;
//    @PersistenceContext là một annotation trong Java Persistence API (JPA)
//    được sử dụng để đánh dấu một đối tượng EntityManager để tiêm vào trong một đối tượng Spring bean.
    @Override
    public List<Recipe> findAll() {
        return this.iRecipeRepository.findAll();
    }

    @Override
    public List<Recipe> findMenu(RecipeIDetailDTO[] recipeIDetailDTOS) {
//         Sử dụng EntityManager để tạo truy vấn
            StringBuilder subquery = new StringBuilder();
            StringBuilder mainquery = new StringBuilder("select distinct b.id,b.content,b.imgs,b.name,b.rate,b.videos from recipe_detail a join recipe b on a.recipe_id = b.id in (");
            subquery.append("SELECT recipe_id FROM capstone2.recipe_detail where food_detail_id=");
        for (int i=0;i<recipeIDetailDTOS.length;i++){
            if (i==0){
                subquery.append(recipeIDetailDTOS[i].getFood_detail_id());
            }else {
                subquery.append("|| food_detail_id="+String.valueOf(recipeIDetailDTOS[i].getFood_detail_id()));
            }
        }
        mainquery.append(subquery.toString()+");");
//        Bắt buộc phải có Recipe.class nếu k sẽ trả về kiểu Object
        Query query = entityManager.createNativeQuery(mainquery.toString(),Recipe.class);
//        System.out.println(mainquery.toString());
        List<Recipe> recipes = new ArrayList();
            recipes = query.getResultList();
            return recipes;
    }
    public void addRecipe(RecipeDTO recipeDTO){
        Recipe recipe = new Recipe(recipeDTO);
        Recipe recipe1 = this.iRecipeRepository.save(recipe);
        if (recipe1!=null){
            List<RecipeIDetailDTO> recipeIDetailDTOS = Arrays.asList(recipeDTO.getFood_detail());
            for (RecipeIDetailDTO recipeIDetailDTO : recipeIDetailDTOS){
                FoodDetail foodDetail = this.iFoodDetailServices.findById(recipeIDetailDTO.getFood_detail_id());
                RecipeDetailId recipeDetailId = new RecipeDetailId(foodDetail,recipe1);
                RecipeDetail recipeDetail = new RecipeDetail(recipeDetailId,recipeIDetailDTO.getQuantity());
                    this.iRecipeDetailServices.saveRecipeDetail(recipeDetail);
            }
        }
    }

    @Override
    public Recipe findById(Integer id) {
        return this.iRecipeRepository.findById(id).orElse(null);
    }


}

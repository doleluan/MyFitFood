package com.example.backend.services.Impl;

import com.example.backend.model.recipe.RecipeDetail;
import com.example.backend.repository.IRecipeDetailRepository;
import com.example.backend.services.IRecipeDetailServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeDetailServices implements IRecipeDetailServices {
    @Autowired
    private IRecipeDetailRepository iRecipeDetailRepository;

    @Override
    public List<RecipeDetail> findAll() {
        return this.iRecipeDetailRepository.findAll();
    }

    @Override
    public void saveRecipeDetail(RecipeDetail recipeDetail) {
        this.iRecipeDetailRepository.save(recipeDetail);
    }
}

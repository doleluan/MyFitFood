package com.example.backend.services;
import com.example.backend.model.recipe.RecipeDetail;

import java.util.List;

public interface IRecipeDetailServices {
    List<RecipeDetail> findAll();
    void   saveRecipeDetail(RecipeDetail recipeDetail);
}

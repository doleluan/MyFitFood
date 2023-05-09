package com.example.backend.repository;

import com.example.backend.model.recipe.RecipeDetail;
import com.example.backend.model.recipe.RecipeDetailId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRecipeDetailRepository extends JpaRepository<RecipeDetail,RecipeDetailId> {
}

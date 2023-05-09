package com.example.backend.repository;

import com.example.backend.model.recipe.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRecipeRepository extends JpaRepository<Recipe,Integer> {

}

package com.example.backend.controller;

import com.example.backend.model.recipe.RecipeDetail;
import com.example.backend.services.IRecipeDetailServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipedetail")
@CrossOrigin("http://localhost:4200/")
public class RecipeDetailRestController {
    @Autowired
    private IRecipeDetailServices iRecipeDetailServices;
    @GetMapping("")
    private ResponseEntity<List<RecipeDetail>> findAll(){
        return new ResponseEntity<>(this.iRecipeDetailServices.findAll(), HttpStatus.OK);
    }

}

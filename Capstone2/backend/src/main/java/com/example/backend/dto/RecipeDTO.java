package com.example.backend.dto;

import com.example.backend.model.recipe.Recipe;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {
    private RecipeIDetailDTO food_detail[];
    private String name;
    private String content;
    private String videos;
    private String imgs;
    private Integer rate;
}

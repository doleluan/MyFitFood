package com.example.backend.model.recipe;

import com.example.backend.dto.RecipeDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RecipeDetail {
    @EmbeddedId
    private RecipeDetailId recipeDetailId;
    private Integer quantity;
}

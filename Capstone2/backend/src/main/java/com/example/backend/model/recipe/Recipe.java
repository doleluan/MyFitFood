package com.example.backend.model.recipe;

import com.example.backend.dto.RecipeDTO;
import com.example.backend.dto.RecipeIDetailDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String content;
    private String imgs;
    private String videos;
    private Integer rate;
    public Recipe(RecipeDTO recipeDTO){
        this.name = recipeDTO.getName();
        this.id=null;
        this.content=recipeDTO.getContent();
        this.imgs = recipeDTO.getImgs();
        this.videos = recipeDTO.getVideos();
        this.rate = recipeDTO.getRate();
    }
}

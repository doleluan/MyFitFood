package com.example.backend.model.post;

import com.example.backend.dto.PostDTO;
import com.example.backend.model.person.Users;
import com.example.backend.model.recipe.Recipe;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String time;
    private String description;
    private String img;
    @ManyToOne
    @JoinColumn(name = "author")
    private Users users;
    @ManyToOne
    @JoinColumn(name = "recipe")
    private Recipe recipe;
    public Post(PostDTO postDTO){
        this.time = postDTO.getTime();
        this.description = postDTO.getDescription();
        this.img = postDTO.getImg();
        this.title = postDTO.getTitle();
        Recipe recipe = new Recipe();
        recipe.setId(postDTO.getRecipe());
        this.recipe = recipe;
        Users users = new Users();
        users.setId(postDTO.getUser());
        this.users = users;
    }
}

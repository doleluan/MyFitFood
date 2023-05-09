package com.example.backend.model.food;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FoodDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String imgs;
    @ManyToOne
    @JoinColumn(name = "food_id")
    private Food food;
}

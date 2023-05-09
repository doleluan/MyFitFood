package com.example.backend.services;

import com.example.backend.model.food.Food;

import java.util.List;

public interface IFoodServices {
    List<Food> findAll();
}

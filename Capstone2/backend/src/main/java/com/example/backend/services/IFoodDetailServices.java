package com.example.backend.services;

import com.example.backend.model.food.FoodDetail;

import java.util.List;

public interface IFoodDetailServices {
    List<FoodDetail> findAll();
    public FoodDetail findById(Integer id);
}

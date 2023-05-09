package com.example.backend.services.Impl;

import com.example.backend.model.food.Food;
import com.example.backend.repository.IFoodRepository;
import com.example.backend.services.IFoodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodServices implements IFoodServices {
    @Autowired
    private IFoodRepository iFoodRepository;
    @Override
    public List<Food> findAll() {
        return iFoodRepository.findAll();
    }
}


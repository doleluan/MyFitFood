package com.example.backend.services.Impl;

import com.example.backend.model.food.Food;
import com.example.backend.model.food.FoodDetail;
import com.example.backend.repository.IFoodDetailRepository;
import com.example.backend.services.IFoodDetailServices;
import com.example.backend.services.IFoodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodDetailServices implements IFoodDetailServices {
    @Autowired
    private IFoodDetailRepository iFoodDetailRepository;
    @Override
    public List<FoodDetail> findAll() {
        return iFoodDetailRepository.findAll();
    }
    @Override
    public FoodDetail findById(Integer id){
        return this.iFoodDetailRepository.findById(id).orElse(null);
    }
}

package com.example.backend.services.Impl;

import com.example.backend.model.food.TypeFood;
import com.example.backend.repository.ITypeFoodRepository;
import com.example.backend.services.ITypeFoodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeFoodServices implements ITypeFoodServices {
    @Autowired
    private ITypeFoodRepository iTypeFoodRepository;
    @Override
    public List<TypeFood> findAll() {
        return this.iTypeFoodRepository.findAll();
    }
}

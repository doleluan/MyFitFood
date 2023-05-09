package com.example.backend.services;

import com.example.backend.model.food.TypeFood;

import java.util.List;

public interface ITypeFoodServices{
    List<TypeFood> findAll();
}

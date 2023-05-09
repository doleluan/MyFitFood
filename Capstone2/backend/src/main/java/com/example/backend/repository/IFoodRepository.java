package com.example.backend.repository;

import com.example.backend.model.food.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFoodRepository extends JpaRepository<Food,Integer> {
}

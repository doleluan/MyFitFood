package com.example.backend.repository;

import com.example.backend.model.food.FoodDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFoodDetailRepository extends JpaRepository<FoodDetail,Integer> {
}

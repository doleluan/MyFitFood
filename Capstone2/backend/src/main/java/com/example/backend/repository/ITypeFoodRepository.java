package com.example.backend.repository;

import com.example.backend.model.food.TypeFood;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeFoodRepository extends JpaRepository<TypeFood,Integer> {

}

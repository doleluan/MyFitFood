package com.example.backend.repository;

import com.example.backend.model.person.Gender;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGenderRepository extends JpaRepository<Gender,Integer> {
}

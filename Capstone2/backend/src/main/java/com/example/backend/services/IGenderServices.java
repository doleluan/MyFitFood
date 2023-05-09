package com.example.backend.services;

import com.example.backend.model.person.Gender;

import java.util.List;

public interface IGenderServices {
    List<Gender> findAll();
}

package com.example.backend.services.Impl;

import com.example.backend.model.person.Gender;
import com.example.backend.repository.IGenderRepository;
import com.example.backend.services.IGenderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class GenderServices implements IGenderServices {
    @Autowired
    private IGenderRepository iGenderRepository;
    @Override
    public List<Gender> findAll() {
        return this.iGenderRepository.findAll();
    }
}

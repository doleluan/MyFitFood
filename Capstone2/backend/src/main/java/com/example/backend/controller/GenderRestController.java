package com.example.backend.controller;

import com.example.backend.model.person.Gender;
import com.example.backend.services.IGenderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/gender")
@CrossOrigin("http://localhost:4200/")
public class GenderRestController {
    @Autowired
    private IGenderServices iGenderServices;
    @GetMapping("")
    private ResponseEntity<List<Gender>> findAll(){
        return new ResponseEntity<>(this.iGenderServices.findAll(), HttpStatus.OK);
    }
}

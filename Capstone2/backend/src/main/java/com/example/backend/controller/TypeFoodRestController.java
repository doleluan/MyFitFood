package com.example.backend.controller;

import com.example.backend.model.food.TypeFood;
import com.example.backend.services.ITypeFoodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("typeFood")
@CrossOrigin("http://localhost:4200")
public class TypeFoodRestController {
    @Autowired
    private ITypeFoodServices iTypeFoodServices;
    @GetMapping("")
    private ResponseEntity<List<TypeFood>> findAll(){
        return new ResponseEntity<List<TypeFood>>(this.iTypeFoodServices.findAll(), HttpStatus.OK);
    }
}

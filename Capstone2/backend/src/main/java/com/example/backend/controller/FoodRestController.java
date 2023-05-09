package com.example.backend.controller;

import com.example.backend.model.food.Food;
import com.example.backend.services.IFoodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("food")
@CrossOrigin("http://localhost:4200/")
public class FoodRestController {
    @Autowired
    private IFoodServices iFoodServices;
    @GetMapping("")
    private ResponseEntity<List<Food>> findAll(){
        return  new ResponseEntity<>(this.iFoodServices.findAll(), HttpStatus.OK);
    }
}

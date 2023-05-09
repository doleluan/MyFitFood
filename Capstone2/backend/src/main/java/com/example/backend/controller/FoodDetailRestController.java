package com.example.backend.controller;

import com.example.backend.model.food.FoodDetail;
import com.example.backend.services.IFoodDetailServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/fooddetail")
@CrossOrigin("http://localhost:4200/")
public class FoodDetailRestController {
    @Autowired
    private IFoodDetailServices iFoodDetailServices;
    @GetMapping("")
    private ResponseEntity<List<FoodDetail>> findAll(){
        return new ResponseEntity<>(this.iFoodDetailServices.findAll(), HttpStatus.OK);
    }
}

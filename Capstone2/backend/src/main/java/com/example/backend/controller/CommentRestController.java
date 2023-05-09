package com.example.backend.controller;

import com.example.backend.model.post.Comment;
import com.example.backend.services.ICommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin("http://localhost:4200/")
public class CommentRestController {
    @Autowired
    private ICommentServices iCommentServices;
    @GetMapping("")
    private ResponseEntity<List<Comment>> findAll(){
        return new ResponseEntity<>(this.iCommentServices.findAll(), HttpStatus.OK);
    }
}

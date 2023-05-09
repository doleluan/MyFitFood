package com.example.backend.services;

import com.example.backend.model.post.Comment;

import java.util.List;

public interface ICommentServices {
    List<Comment> findAll();
}

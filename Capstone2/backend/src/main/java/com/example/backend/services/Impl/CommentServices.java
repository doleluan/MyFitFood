package com.example.backend.services.Impl;

import com.example.backend.model.post.Comment;
import com.example.backend.repository.ICommentRepository;
import com.example.backend.services.ICommentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommentServices implements ICommentServices {
    @Autowired
    private ICommentRepository iCommentRepository;
    @Override
    public List<Comment> findAll() {
        return this.iCommentRepository.findAll();
    }
}

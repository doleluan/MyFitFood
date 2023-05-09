package com.example.backend.repository;

import com.example.backend.model.post.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICommentRepository extends JpaRepository<Comment,Integer> {
}

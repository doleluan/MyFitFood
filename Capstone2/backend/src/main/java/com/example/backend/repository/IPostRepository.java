package com.example.backend.repository;

import com.example.backend.model.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPostRepository extends JpaRepository<Post,Integer> {
}

package com.example.backend.services.Impl;

import com.example.backend.dto.PostDTO;
import com.example.backend.model.post.Post;
import com.example.backend.repository.IPostRepository;
import com.example.backend.services.IPostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServices implements IPostServices {
    @Autowired
    private IPostRepository iPostServices;

    @Override
    public List<Post> findAll() {
        return this.iPostServices.findAll();
    }

    @Override
    public Post savePost(PostDTO postDTO) {
        Post post = new Post(postDTO);

        return this.iPostServices.save(post);
    }
}

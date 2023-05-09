package com.example.backend.repository;

import com.example.backend.model.person.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<Users,Integer> {
    @Query(value = "select * from users where users.username = :username",nativeQuery = true)
    Optional<Users> findByUsername(@Param("username") String username);
}

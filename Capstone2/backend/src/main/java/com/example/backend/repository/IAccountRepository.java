package com.example.backend.repository;

import com.example.backend.model.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface IAccountRepository extends JpaRepository<Account,String> {
      Account  findAccountByUsername(String username);
}

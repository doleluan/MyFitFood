package com.example.backend.services.Impl;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.account.Account;
import com.example.backend.model.account.AccountRoles;
import com.example.backend.model.account.KeyAccountRole;
import com.example.backend.model.account.Roles;
import com.example.backend.model.person.Users;
import com.example.backend.repository.IUserRepository;
import com.example.backend.services.IAccountRolesServices;
import com.example.backend.services.IAccountServices;
import com.example.backend.services.IUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
@Service
public class UserServices implements IUserServices {
    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private IAccountServices iAccountServices;
    @Autowired
    private IAccountRolesServices iAccountRolesServices;
    @Override
    public Users saveUser(UserDTO userDTO) {

//        add new accout
        Account account = new Account(userDTO);
        System.out.println(userDTO.getUsername());
        account.setPassword(this.passwordEncoder.encode(userDTO.getPassword()));
////        add new role_user
        Account account1 = this.iAccountServices.saveAccount(account);
        KeyAccountRole keyAccountRole = new KeyAccountRole(account1,new Roles(1,"aaa"));
        AccountRoles accountRoles = new AccountRoles(keyAccountRole);
        this.iAccountRolesServices.saveAccountRoles(accountRoles);
        //        add new user
        Users users = new Users(userDTO);
        users.setUsername(account1);
        return iUserRepository.save(users);
    }

    @Override
    public Users findByUserName(String userName) {
        return iUserRepository.findByUsername(userName).orElse(null);
    }
    @Override
    public List<Users> findAllUsers() {
        return iUserRepository.findAll();
    }
}

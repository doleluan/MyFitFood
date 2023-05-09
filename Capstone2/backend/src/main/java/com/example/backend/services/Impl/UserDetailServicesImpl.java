package com.example.backend.services.Impl;

import com.example.backend.model.account.Account;

import com.example.backend.services.IAccountServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailServicesImpl implements UserDetailsService {
    @Autowired
    private IAccountServices iAccountServices;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = this.iAccountServices.findAccountByUsername(username);
        if(account == null) {
            throw new UsernameNotFoundException(username);
        }
        List<GrantedAuthority> list = (List<GrantedAuthority>) account.getAuthorities();
        return  new User(account.getUsername(), account.getPassword(), list);
    }
}

package com.example.backend.services.Impl;

import com.example.backend.dto.UserDTO;
import com.example.backend.model.account.Account;
import com.example.backend.repository.IAccountRepository;
import com.example.backend.services.IAccountServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServicesImpl implements IAccountServices {
    @Autowired
    private IAccountRepository iAccountRepository;
    @Override
    public Account saveAccount(Account account) {
        return this.iAccountRepository.save(account);
    }

    @Override
    public Account findAccountByUsername(String userName) {
        return this.iAccountRepository.findAccountByUsername(userName);
    }
}

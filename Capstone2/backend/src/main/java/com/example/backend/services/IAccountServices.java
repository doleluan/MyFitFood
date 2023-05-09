package com.example.backend.services;

import com.example.backend.model.account.Account;

public interface IAccountServices {
    Account saveAccount(Account account);
    Account findAccountByUsername(String userName);
}

package com.example.backend.services.Impl;

import com.example.backend.model.account.AccountRoles;
import com.example.backend.repository.IAccountRolesRepository;
import com.example.backend.services.IAccountRolesServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountRolesServicesImpl implements IAccountRolesServices {
    @Autowired
    private IAccountRolesRepository iAccountRolesRepository;
    @Override
    public AccountRoles saveAccountRoles(AccountRoles accountRoles) {
        return this.iAccountRolesRepository.save(accountRoles);
    }
}

package com.example.backend.repository;

import com.example.backend.model.account.AccountRoles;
import com.example.backend.model.account.KeyAccountRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAccountRolesRepository extends JpaRepository<AccountRoles, KeyAccountRole> {
}

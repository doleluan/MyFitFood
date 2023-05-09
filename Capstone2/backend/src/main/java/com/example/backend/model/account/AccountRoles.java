package com.example.backend.model.account;

import lombok.*;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor

@ToString
public class AccountRoles implements Serializable {
    @EmbeddedId
    private KeyAccountRole keyAccountRole;
    public AccountRoles(KeyAccountRole keyAccountRole){
        this.keyAccountRole = keyAccountRole;
//        vi keyaccount role dang null ne k the tro toi duoc
//        this.keyAccountRole.setAccount(account);
//        System.out.println(account.getUsername());
//        this.keyAccountRole.setRoles(new Roles(1,"ROLE_USER"));
    }
}

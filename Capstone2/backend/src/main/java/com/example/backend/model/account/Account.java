package com.example.backend.model.account;

import com.example.backend.dto.UserDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account implements UserDetails {
    @Id
    private String username;
    @JsonIgnore
    private String password;
    private Boolean flag;
    private Date dateCreated;
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "username")

    List<AccountRoles> authorities;
    public Account(UserDTO userDTO){
        long milis = System.currentTimeMillis();
        Date date = new Date(milis);
        this.setDateCreated(date);
        this.username = userDTO.getUsername();
        this.setFlag(false);
        this.authorities = new ArrayList<>();
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities
                .stream()
                .map(x -> new SimpleGrantedAuthority(x.getKeyAccountRole().getRoles().getName()))
                .collect(Collectors.toList());
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}

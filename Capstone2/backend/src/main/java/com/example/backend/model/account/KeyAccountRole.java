package com.example.backend.model.account;

import lombok.*;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class KeyAccountRole implements Serializable {
    private static final long serialVersionUID = 1;
    @ManyToOne
    @JoinColumn(name = "username")
    private Account account;
    @ManyToOne
    @JoinColumn(name="role")
    private Roles roles;
}

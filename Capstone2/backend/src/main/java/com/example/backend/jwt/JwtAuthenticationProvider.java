package com.example.backend.jwt;

import com.example.backend.services.Impl.UserDetailServicesImpl;
import com.example.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
//2
@Component
public class JwtAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private UserDetailServicesImpl userDetailsService;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = String.valueOf(authentication.getPrincipal());
        String passWord = String.valueOf(authentication.getCredentials());
        UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
        if (userDetails != null) {
            if ( passwordEncoder.matches(passWord, userDetails.getPassword())){
                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userName,passWord, userDetails.getAuthorities());
                return token;
            }
        }
        throw new BadCredentialsException("error");
    }
    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.equals(authentication);
    }
}

package com.example.backend.filter;

import com.example.backend.model.account.Account;
import com.example.backend.services.IAccountServices;
import com.example.backend.services.IUserServices;
import com.example.backend.services.Impl.UserDetailServicesImpl;
import com.example.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
//1
@Component
public class JwtTokenFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private IAccountServices iAccountServices;
    @Autowired
    private UserDetailServicesImpl userDetailServices;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader == null || authorizationHeader.isEmpty() || !authorizationHeader.startsWith("Bearer")) {
            filterChain.doFilter(request, response);
            return;
        }
        String token = authorizationHeader.split(" ")[1].trim();
        if (!jwtUtil.validate(token)) {
            filterChain.doFilter(request, response);
            return;
        }
        String userName  = jwtUtil.getUsername(token);
//        Đoạn code thêm
        UserDetails userDetails = this.userDetailServices.loadUserByUsername(userName);
//        Ketes thuc
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName, null, userDetails.getAuthorities());
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);

    }
}

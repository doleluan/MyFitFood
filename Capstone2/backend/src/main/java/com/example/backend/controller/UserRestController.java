package com.example.backend.controller;

import com.example.backend.dto.UserDTO;
import com.example.backend.dto.UserInfo;
import com.example.backend.model.person.Users;
import com.example.backend.services.Impl.UserServices;
import com.example.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UserRestController {
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private UserServices userService;
    @PostMapping("/registration")
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        if(userService.findByUserName(userDTO.getUsername()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(userService.saveUser(userDTO), HttpStatus.CREATED);
    }
@PostMapping("/login")
public ResponseEntity<Object> login(@RequestBody UserDTO userDTO) {
    UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken
            (userDTO.getUsername(), userDTO.getPassword());
    authenticationManager.authenticate(token);
    String jwtToken = jwtUtil.generate(userDTO.getUsername());
    Map<String, String> response = new HashMap<>();
    response.put("token", jwtToken);
    return ResponseEntity.ok(response);
}
    @GetMapping("/getUserInfor")
    public ResponseEntity<UserInfo> getUserInfo(HttpServletRequest httpServletRequest){
        String token = httpServletRequest.getHeader("Authorization").split(" ")[1].trim();
        String username = this.jwtUtil.getUsername(token);
        UserInfo userInfo = new UserInfo(this.userService.findByUserName(username));
        if (userInfo==null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(userInfo,HttpStatus.OK);
    }
}

package com.queue.controller;


import com.queue.entity.Branch;
import com.queue.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "/api/branch")
public class BranchController {

    @Autowired
    BranchService branchService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/{id}")
    public Branch findById(@PathVariable("id") int id) {
        return branchService.getById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/all")
    public Collection<Branch> findAll() {
        System.out.println(branchService.findAll());
        return branchService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/save")
    public boolean saveBranch(@RequestBody(required = true) Branch branch) {

        return branchService.save(branch);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "/delete/all")
    public boolean deleteAll() {
        return branchService.deleteAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "/delete/{id}")
    public boolean deleteById(@PathVariable("id") int id) {
        return branchService.deleteById(id);
    }


}

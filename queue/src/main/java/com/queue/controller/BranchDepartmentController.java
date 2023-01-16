package com.queue.controller;


import com.queue.entity.BranchDepartment;
import com.queue.service.BranchDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "/api/branch-department")
public class BranchDepartmentController {
    @Autowired
    BranchDepartmentService branchDepartmentService;




    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/{id}")
    public BranchDepartment getById(@PathVariable("id") int id) {
        return branchDepartmentService.getById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/all")
    public Collection<BranchDepartment> findAll() {


        return branchDepartmentService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/branch/{branchId}")
    public Collection<BranchDepartment> findDepartmentsByBranchId(@PathVariable("branchId") int branchId) {
        return branchDepartmentService.findDepartmentsByBranchId(branchId);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/save")
    public boolean saveBranchDepartment(@RequestBody(required = true) BranchDepartment branchDepartment) {
        System.out.println("entro al api" + branchDepartment.getBranchDepartmentId());
        return branchDepartmentService.save(branchDepartment);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "/delete/all")
    public boolean deleteAll() {
        return branchDepartmentService.deleteAll();
    }

   /* @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "/delete/{id}")
    public boolean deleteByBranchDepartmentId(@PathVariable("branchDepartmentId") String branchDepartmentId) {
        return branchDepartmentService.deleteByBranchDepartmentId(branchDepartmentId);
    }*/

}

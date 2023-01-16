package com.queue.controller;
import com.queue.entity.Department;
import com.queue.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "/api/department")
public class DepartmentController {

    @Autowired
    DepartmentService departmentService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/{id}")
    public Department getById(@PathVariable("id") int id) {
        return departmentService.getById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(path = "/all")
    public Collection<Department> findAll() {
        return departmentService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/save")
    public boolean saveDepartment(@RequestBody(required = true) Department department) {
        return departmentService.save(department);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "/delete/all")
    public boolean deleteAll() {
        return departmentService.deleteAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(path = "/delete/{id}")
    public boolean deleteById(@PathVariable("id") int id) {
        return departmentService.deleteById(id);
    }


}

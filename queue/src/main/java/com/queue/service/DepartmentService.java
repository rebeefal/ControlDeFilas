package com.queue.service;


import com.queue.entity.Department;

import java.util.Collection;

public interface DepartmentService {
    //Department getById(int departmentId);
    Department getById(int id);

    Collection<Department> findAll();

    boolean save(Department department);
    boolean deleteAll();
    boolean deleteById(int id);



}

package com.queue.serviceImpl;

import com.queue.entity.Branch;
import com.queue.entity.Department;
import com.queue.service.DepartmentService;
import com.queue.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class DepartmentServiceImplementation implements DepartmentService {
  @Autowired
  DepartmentRepository departmentRepository;

  @Override
  public Department getById(int departmentId) {
    System.out.print("Entro en departmentId get By Id  " + departmentId);

    departmentRepository.findAll();
    Department dep = departmentRepository.findById(departmentId).orElse(null);
    return dep;
  }

  public Collection<Department> findAll() {
    Collection<Department> ds = departmentRepository.findAll();
    return ds;
  }

  @Override
  public boolean save(Department department) {
    departmentRepository.save(department);

    return true;
  }

  @Override
  public boolean deleteAll() {
    departmentRepository.deleteAll();
    return true;
  }

  @Override
  public boolean deleteById(int id) {
    Department d=getById(id);
    departmentRepository.deleteById(d.getId());
    return true;
  }

}

package com.queue.service;

import com.queue.entity.BranchDepartment;

import java.util.Collection;

public interface BranchDepartmentService {
    BranchDepartment getById(int branchId);

    Collection<BranchDepartment> findDepartmentsByBranchId(int branchId);

    Collection<BranchDepartment> findAll();

    boolean save(BranchDepartment branchDepartment);
    boolean deleteAll();
}

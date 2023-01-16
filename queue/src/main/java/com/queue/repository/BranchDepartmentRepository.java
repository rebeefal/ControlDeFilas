package com.queue.repository;
import com.queue.entity.BranchDepartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface BranchDepartmentRepository extends JpaRepository<BranchDepartment, Integer> {
    @Query("SELECT d FROM BranchDepartment d WHERE d.branchId=:branchId")
    Collection<BranchDepartment> findDepartmentsByBranchId(int branchId);

}
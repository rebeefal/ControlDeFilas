package com.queue.entity;

import javax.persistence.*;

@Entity
@Table(name = "queueClient")
public class Queue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String branchDepartmentId;
    private int clientNumber;
    private int branchId;
    private int departmentId;
    private String window;
    private String departmentLetter;


    public Queue() {
    }

    public Queue(int clientNumber, int branchId, int departmentId, String window) {
        this.clientNumber = clientNumber;
        this.branchId = branchId;
        this.departmentId = departmentId;
        this.window = window;
    }

    public Queue(int branchId, int departmentId, String window) {
        this.branchId = branchId;
        this.departmentId = departmentId;
        this.window = window;
    }

    public String getBranchDepartmentId() {
        return branchDepartmentId;
    }

    public void setBranchDepartmentId(String branchDepartmentId) {
        this.branchDepartmentId = branchDepartmentId;
    }

    public int getBranchId() {
        return branchId;
    }

    public void setBranchId(int branchId) {
        this.branchId = branchId;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentLetter() {
        return departmentLetter;
    }

    public void setDepartmentLetter(String departmentLetter) {
        this.departmentLetter = departmentLetter;
    }

    public int getClientNumber() {
        return clientNumber;
    }
    public void setClientNumber(int clientNumber) {
        this.clientNumber = clientNumber;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getWindow() {
        return window;
    }
    public void setWindow(String window) {
        this.window = window;
    }

}
